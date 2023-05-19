import React from 'react';
import CommonSection from '../shared/CommonSection';
import "../styles/tour.css";
import tourData from '../assets/data/tours'
import TourCard from '../shared/TourCard';
import SearchBar from '../shared/SeachBar';
import Newsletter from '../shared/Newsletter';

import { Col, Container } from 'reactstrap';
import { Row } from 'reactstrap'; 
import { useEffect, useState } from 'react';

import useFetch from '../hooks/useFetch'
import { BASE_URL } from '../utils/config';

const Tours = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page,setPage] = useState(0);
  
  const {data:tours, loading, error} = useFetch(`${BASE_URL}/tours`)
  const {data:tourCount} = useFetch(`${BASE_URL}/tours/search/getTourCount`)



  useEffect(()=>{

    const pages = Math.ceil(tourCount / 4); //for backend data count
    setPageCount(pages);

  },[page, tourCount]);

    return (
        <>
        <CommonSection title={'All Tours'} />
        <section>
            <Container>
                <Row>
                  <SearchBar/> 
                </Row>
            </Container>
        </section>
        <section className="pt-0">
            <Container>
            {
                !loading && !error &&               
                <Row>
                {
                    tours ?.map(tour=>( <Col lg="3" className="mb-4" key={tour.id}> 

                    <TourCard tour={tour}/>
                    </Col>))
                }

                <Col LG='12'>
                <div className="pagination d-flex align-items-center
                justify-content-center mt-4 gap-3">
                    {[ ...Array(pageCount).keys()].map(number=>(
                       <span key={number} onClick={() => setPage(number)}
                       className={page===number ? "active_page": ""} >
                        {number +1}
                       </span> 
                    ))}

                </div>
                </Col>
            </Row>
            }
            </Container>
        </section>

        <Newsletter/>

        
        </>
    );
};

export default Tours;
