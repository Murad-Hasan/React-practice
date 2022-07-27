import Layout from "../components/layout/Layout";
import Section from "../components/section/Section";
const Home = () => {
    const education =['Item 1', 'Item 2', 'Item 3'];
    const experience = ['Item 4', 'Item 5', 'Item 6'];
    return (
        <Layout>
            <Section title='education' items={education} />
            <Section title='experience ' items={experience} />
        </Layout>
    );
};

export default Home;