
import React from 'react';
import styled from 'styled-components';
import { navigate } from 'gatsby';
import { Helmet } from "react-helmet";

const Container = styled.div `

`

const Image = styled.img `
    width: 200px;
    height: 250px;
`


const InfoTemplate = ({pageContext}) => {
    
    return(
       <Container>
           <Helmet>
               <title>{pageContext.name}</title>
           </Helmet>
           <h1>{pageContext.name}</h1>
           <Image src={pageContext.image} />
           <p>espécie: {pageContext.species}</p>
           <p>gênero: {pageContext.gender}</p>
           <p>casa: {pageContext.house || 'sem-teto'}</p>
           <p>data de nascimento: {pageContext.dateOfBirth}</p>
           <p>ano de nascimento: {pageContext.yearOfBirth}</p>
           <p>ancestralidade: {pageContext.ancestry || 'sem parentes'}</p>
           <h3>{pageContext.slug}</h3>

           <button onClick={() => navigate('/')} >voltar</button>
           
       </Container>
    )
}

export default InfoTemplate;