from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import CountVectorizer
import pandas as pd
import requests
import json
import sys
r = requests.get('http://localhost:5000/api/Project')
my_dict = r.json()
my_dict = my_dict.get('projects')
df = pd.json_normalize(my_dict)

index = df.index


df["Combined_features"] = df["Title"]+" " + \
    df["Desc"]+" "+df["Author"]+" "+df["LanguageTag"]

cv = CountVectorizer()
count_matrix = cv.fit_transform(df["Combined_features"])

cosine_sim = cosine_similarity(count_matrix)


Project_user_likes = [
    "Project Monitoring and Evaluation System", "Hotel Booking App For Smart Travel"]


def get_index_from_title(title):
    return df[df.Title == title]["index"].values[0]


Project_index = []
for liked_project in Project_user_likes:
    Project_index.append(get_index_from_title(liked_project))


similar_project = []
for pIndex in Project_index:
    similar_project = similar_project+(list(enumerate(cosine_sim[pIndex])))


sorted_similar_project = sorted(
    similar_project, key=lambda x: x[1], reverse=True)


def get_title_from_index(index):
    return df[df.index == index]['Title'].values[0]


def get_author_from_index(index):
    return df[df.index == index]['Author'].values[0]


def get_language_from_index(index):
    return df[df.index == index]['LanguageTag'].values[0]


def get_id_from_index(index):
    return df[df.index == index]['_id'].values[0]


userAuthor = ['joneschelsey', 'ypittman', 'ubrock', 'juanli']
userLang = ['Node JS', 'Python']


def getByLike():
    recLike = []
    for project in sorted_similar_project:
        #         print(project[0])
        recLike.append(get_id_from_index(project[0]))
        if len(recLike) >= 30:
            break
    return recLike


def getByLan():
    recLan = set()
    for project in sorted_similar_project:
        lan = get_language_from_index(project[0])
        lan = lan.replace('[', " ") .replace(
            "]", "").replace("'", "").split(sep=",")
        for i in lan:
            if i.strip() in userLang:
                #                 print(project[0])
                recLan.add(get_id_from_index(project[0]))
        if len(recLan) >= 30:
            break
    return recLan


def getByAuthor():
    recAuth = []
    for project in sorted_similar_project:
        auth = get_author_from_index(project[0])
        auth = auth.replace('[', " ") .replace(
            "]", "").replace("'", "").split(sep=",")
        for i in auth:
            if i.strip() in userAuthor:
                #                 print(project[0])
                recAuth.append(get_id_from_index(project[0]))
        if len(recAuth) >= 30:
            break
    return recAuth


ans = json.dumps(getByLike())
print(ans)

sys.stdout.flush()
