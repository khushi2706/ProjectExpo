import json
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import CountVectorizer
import pandas as pd
import sys
import requests

r = requests.get('http://localhost:5000/api/Project')
my_dict = r.json()
my_dict = my_dict.get('projects')
df = pd.json_normalize(my_dict)

index = df.index


def convertTostr(a):
    return ' '.join(a)


df['Tags'] = df["Tags"].apply(convertTostr)

df["Combined_features"] = df["Pname"]+" " + \
    df["Desc"]+" "+df["Tags"]+" "+df["PType"]

df['index'] = index

cv = CountVectorizer()
count_matrix = cv.fit_transform(df["Combined_features"])

cosine_sim = cosine_similarity(count_matrix)

Project_user_likes = [
    "Project Monitoring and Evaluation System", "Hotel Booking App For Smart Travel"]


def get_index_from_title(title):
    return df[df.Pname == title]["index"].values[0]


Project_index = []
for liked_project in Project_user_likes:
    Project_index.append(get_index_from_title(liked_project))

similar_project = []
for pIndex in Project_index:
    similar_project = similar_project+(list(enumerate(cosine_sim[pIndex])))


sorted_similar_project = sorted(
    similar_project, key=lambda x: x[1], reverse=True)


def get_title_from_index(index):
    return df[df.index == index]['Pname'].values[0]


def get_id_from_index(index):
    return df[df.index == index]['_id'].values[0]


userAuthor = ['joneschelsey', 'ypittman', 'ubrock', 'juanli']
userLang = ['Node JS', 'Python']


def getByLike():
    recLike = []
    for project in sorted_similar_project:
        recLike.append(get_id_from_index(project[0]))
        if len(recLike) >= 30:
            break
    return recLike


ans = json.dumps(getByLike())
print(ans)

sys.stdout.flush()
