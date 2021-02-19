import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ImageOne from '../components/images/p1.png';
import ImageTwo from '../components/images/p2.png';
import ImageThree from '../components/images/p3.png';
import ImageFour from '../components/images/p4.png';


const Section = styled.section`
height: 100vh;
display: flex;
justify-content: center;
align-item: center;
background: #131313;
`;
const Container = styled.div`
display: grid;
color: #fff;
height: 100vh;
grid-template-columns: 1fr 1fr;
padding: 3rem calc((100vw-1300px) / 2);

@media screen and (max-width: 786xp) {
    grid-template-columns: 1fr;
}
`;

const ColumnLeft = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 5rem 2rem;
h1{
    margin-bottom: .5rem;
    font-size: 2rem;
}
p{
    margin: 2rem 0;
    font-size: 2rem;
    line-height: 1.1;
}
`;

const Button = styled(motion.button)`
background: #7fff00;
border: 2px solid #fff;
padding: 0.5rem 2rem;
color: #000000;
border-radius: 25px;
cursor: pointer;

// &:hover {
//     background: #000000;
//     color: #fff;
// }
`;

const Image = styled(motion.img)`
position: absolute;
width: 100%;
height: 100%;
max-width: 250px;
max-height: 250px
`;

const ColumnRight = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 2rem;
position: relative;

${Image}:nth-child(1) {
    top: 10px;
    left: 10px;
}
${Image}:nth-child(2) {
    top: 130px;
    right: 10px;
}
${Image}:nth-child(3) {
    top: 300px;
    left: 10px;
}
${Image}:nth-child(4) {
    bottom: 10px;
    right: -60px;
}
`;

const Main = () => {
    const fadeLeft = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 }
    };
    return (
        <Section>
            <Container>
                <ColumnLeft>
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 13 }}
                    >
                        Welcome To Space
                </motion.h1>
                    <motion.p
                        variants={fadeLeft}
                        initial='hidden'
                        animate='visible'
                        transition={{ duration: 4 }}
                    >
                        Journey to the Unknown Place
                    </motion.p>
                    <Button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{
                            scale: 1,
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >Lets Go</Button>
                </ColumnLeft>
                <ColumnRight>
                    <Image src={ImageOne} alt='Planet' whileTap={{ scale: 0.9 }}
                        drag={true}
                        dragConstraints={{ left: 0, right: 250, top: 0, bottom: 60 }}
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                    />
                    <Image src={ImageTwo} alt='Planet' whileTap={{ scale: 0.5 }}
                        drag={true}
                        dragConstraints={{ left: 0, right: 250, top: 0, bottom: 60 }}
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                    />
                    <Image src={ImageThree} alt='Planet' whileTap={{ scale: 0.8 }}
                        drag={true}
                        dragConstraints={{ left: 160, right: 0, top: 0, bottom: 90 }}
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                    />
                    <Image src={ImageFour} alt='Planet' whileTap={{ scale: 0.6 }}
                        drag={true}
                        dragConstraints={{ left: 160, right: 0, top: 0, bottom: 90 }}
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                    />
                </ColumnRight>
            </Container>
        </Section>
    )
}

export default Main;
