import './University.css';
import Search from '../Home/Search/Search';
import Header from '../Common/Header';
import RecentSearchTag from './RecentSearchTag';
import bvm_logo from '../../Assets/Images/BVM_logo.png'
import UniversityCard from './UniversityCard'; 
export default function University() {
    return(
        <>
            <div style={{position: 'sticky',}}>
                <Header/>
            </div>
            
            <div style={{position: 'sticky',}}>
                <Search title="Search University" />
            </div>
            
            <div style={{position: 'sticky',
                        textAlign: 'left',
                        fontSize: 22,
                        fontWeight: 'bold', 
                        marginLeft: 20,
                        marginTop: 20,
                        fontFamily: 'poppins'}}>
                Recent Search
            </div>

            <div style={{position: 'sticky',
                        display: 'flex',
                        flexDirection: 'row',
                        marginTop: 10,
                        }}>
                <RecentSearchTag title="Birla Vishwakarma Mahavidhyalaya"/>
                <RecentSearchTag title="DDU"/>
                <RecentSearchTag title="Nirma"/>
                <RecentSearchTag title="IIT Mumbai"/>
            </div>
            
            <hr></hr>

            <div style={{display: 'flex',
                        marginBottom: 20}}>
                <div style={{position: 'sticky',
                            display: 'flex',
                            flexDirection: 'row',
                            top: 200,
                            flexWrap : 'wrap'}}>
                    <UniversityCard title="Birla Vishwakarma Mahavidhyalaya"
                                    information="Birla Vishvakarma Mahavidyalaya Engineering College was established in 1948 from donations made by the Birla Education Trust on the behest of Sardar Vallabhbhai Patel, the first Home Minister of independent India. The college was inaugurated by Lord Mountbatten, the Governor General of India on 14 June 1948, and rose to prominence under the stewardship of Prof. Junarkar and Prof. K.M. Dholakia. It was one of the first few colleges in India that adopted the progressive credit system of relative grading in India. The college has awarded degrees to over 17,000 graduates, and has its alumni spread across the globe."
                                    universityType="Government"
                    />

                    <UniversityCard title="Birla Vishwakarma Mahavidhyalaya"
                                    information="Birla Vishvakarma Mahavidyalaya Engineering College was established in 1948 from donations made by the Birla Education Trust on the behest of Sardar Vallabhbhai Patel, the first Home Minister of independent India. The college was inaugurated by Lord Mountbatten, the Governor General of India on 14 June 1948, and rose to prominence under the stewardship of Prof. Junarkar and Prof. K.M. Dholakia. It was one of the first few colleges in India that adopted the progressive credit system of relative grading in India. The college has awarded degrees to over 17,000 graduates, and has its alumni spread across the globe."
                                    universityType="Government"
                    />

                    <UniversityCard title="Birla Vishwakarma Mahavidhyalaya"
                                    information="Birla Vishvakarma Mahavidyalaya Engineering College was established in 1948 from donations made by the Birla Education Trust on the behest of Sardar Vallabhbhai Patel, the first Home Minister of independent India. The college was inaugurated by Lord Mountbatten, the Governor General of India on 14 June 1948, and rose to prominence under the stewardship of Prof. Junarkar and Prof. K.M. Dholakia. It was one of the first few colleges in India that adopted the progressive credit system of relative grading in India. The college has awarded degrees to over 17,000 graduates, and has its alumni spread across the globe."
                                    universityType="Government"
                    />

                    <UniversityCard title="Birla Vishwakarma Mahavidhyalaya"
                                    information="Birla Vishvakarma Mahavidyalaya Engineering College was established in 1948 from donations made by the Birla Education Trust on the behest of Sardar Vallabhbhai Patel, the first Home Minister of independent India. The college was inaugurated by Lord Mountbatten, the Governor General of India on 14 June 1948, and rose to prominence under the stewardship of Prof. Junarkar and Prof. K.M. Dholakia. It was one of the first few colleges in India that adopted the progressive credit system of relative grading in India. The college has awarded degrees to over 17,000 graduates, and has its alumni spread across the globe."
                                    universityType="Government"
                    />

                    <UniversityCard title="Birla Vishwakarma Mahavidhyalaya"
                                    information="Birla Vishvakarma Mahavidyalaya Engineering College was established in 1948 from donations made by the Birla Education Trust on the behest of Sardar Vallabhbhai Patel, the first Home Minister of independent India. The college was inaugurated by Lord Mountbatten, the Governor General of India on 14 June 1948, and rose to prominence under the stewardship of Prof. Junarkar and Prof. K.M. Dholakia. It was one of the first few colleges in India that adopted the progressive credit system of relative grading in India. The college has awarded degrees to over 17,000 graduates, and has its alumni spread across the globe."
                                    universityType="Government"
                    />

                    <UniversityCard title="Birla Vishwakarma Mahavidhyalaya"
                                    information="Birla Vishvakarma Mahavidyalaya Engineering College was established in 1948 from donations made by the Birla Education Trust on the behest of Sardar Vallabhbhai Patel, the first Home Minister of independent India. The college was inaugurated by Lord Mountbatten, the Governor General of India on 14 June 1948, and rose to prominence under the stewardship of Prof. Junarkar and Prof. K.M. Dholakia. It was one of the first few colleges in India that adopted the progressive credit system of relative grading in India. The college has awarded degrees to over 17,000 graduates, and has its alumni spread across the globe."
                                    universityType="Government"
                    />

                    <UniversityCard title="Birla Vishwakarma Mahavidhyalaya"
                                    information="Birla Vishvakarma Mahavidyalaya Engineering College was established in 1948 from donations made by the Birla Education Trust on the behest of Sardar Vallabhbhai Patel, the first Home Minister of independent India. The college was inaugurated by Lord Mountbatten, the Governor General of India on 14 June 1948, and rose to prominence under the stewardship of Prof. Junarkar and Prof. K.M. Dholakia. It was one of the first few colleges in India that adopted the progressive credit system of relative grading in India. The college has awarded degrees to over 17,000 graduates, and has its alumni spread across the globe."
                                    universityType="Government"
                    />

<UniversityCard title="Birla Vishwakarma Mahavidhyalaya"
                                    information="Birla Vishvakarma Mahavidyalaya Engineering College was established in 1948 from donations made by the Birla Education Trust on the behest of Sardar Vallabhbhai Patel, the first Home Minister of independent India. The college was inaugurated by Lord Mountbatten, the Governor General of India on 14 June 1948, and rose to prominence under the stewardship of Prof. Junarkar and Prof. K.M. Dholakia. It was one of the first few colleges in India that adopted the progressive credit system of relative grading in India. The college has awarded degrees to over 17,000 graduates, and has its alumni spread across the globe."
                                    universityType="Government"
                    />

                    <UniversityCard title="Birla Vishwakarma Mahavidhyalaya"
                                    information="Birla Vishvakarma Mahavidyalaya Engineering College was established in 1948 from donations made by the Birla Education Trust on the behest of Sardar Vallabhbhai Patel, the first Home Minister of independent India. The college was inaugurated by Lord Mountbatten, the Governor General of India on 14 June 1948, and rose to prominence under the stewardship of Prof. Junarkar and Prof. K.M. Dholakia. It was one of the first few colleges in India that adopted the progressive credit system of relative grading in India. The college has awarded degrees to over 17,000 graduates, and has its alumni spread across the globe."
                                    universityType="Government"
                    />

                    <UniversityCard title="Birla Vishwakarma Mahavidhyalaya"
                                    information="Birla Vishvakarma Mahavidyalaya Engineering College was established in 1948 from donations made by the Birla Education Trust on the behest of Sardar Vallabhbhai Patel, the first Home Minister of independent India. The college was inaugurated by Lord Mountbatten, the Governor General of India on 14 June 1948, and rose to prominence under the stewardship of Prof. Junarkar and Prof. K.M. Dholakia. It was one of the first few colleges in India that adopted the progressive credit system of relative grading in India. The college has awarded degrees to over 17,000 graduates, and has its alumni spread across the globe."
                                    universityType="Government"
                    />

                    <UniversityCard title="Birla Vishwakarma Mahavidhyalaya"
                                    information="Birla Vishvakarma Mahavidyalaya Engineering College was established in 1948 from donations made by the Birla Education Trust on the behest of Sardar Vallabhbhai Patel, the first Home Minister of independent India. The college was inaugurated by Lord Mountbatten, the Governor General of India on 14 June 1948, and rose to prominence under the stewardship of Prof. Junarkar and Prof. K.M. Dholakia. It was one of the first few colleges in India that adopted the progressive credit system of relative grading in India. The college has awarded degrees to over 17,000 graduates, and has its alumni spread across the globe."
                                    universityType="Government"
                    />

                    <UniversityCard title="Birla Vishwakarma Mahavidhyalaya"
                                    information="Birla Vishvakarma Mahavidyalaya Engineering College was established in 1948 from donations made by the Birla Education Trust on the behest of Sardar Vallabhbhai Patel, the first Home Minister of independent India. The college was inaugurated by Lord Mountbatten, the Governor General of India on 14 June 1948, and rose to prominence under the stewardship of Prof. Junarkar and Prof. K.M. Dholakia. It was one of the first few colleges in India that adopted the progressive credit system of relative grading in India. The college has awarded degrees to over 17,000 graduates, and has its alumni spread across the globe."
                                    universityType="Government"
                    />
                </div>

                
            </div>
        </>
    )
}

