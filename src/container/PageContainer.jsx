/* eslint-disable react/prop-types */
import Container from '@mui/material/Container';   //kepps the content in the center of the page

function PageContainer({children}) {     //{children} represents Header component
  return (
   <Container>
        {children}
   </Container>
  )
}

export default PageContainer
