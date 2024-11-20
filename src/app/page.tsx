import React from 'react';
import Hero from '@/components/Hero/Hero';
import Section_2 from '@/components/Section-2/Section_2';
import Section_3 from '@/components/Section-3/Section_3';
import Section_4 from '@/components/Section-4/Section-4';
// import Section_5 from '@/components/Section-5/Section-5';   // attach before section-6
import Section_6 from '@/components/Section-6/Section-6';
import Section_7 from '@/components/Section-7/Section-7';
import Section_8 from '@/components/Section-8/Section-8';
import Section_9 from '@/components/Section-9/Section-9';
import Section_10 from '@/components/Section-10/Section-10';
import Footer from '@/components/Footer/Footer';

const Home = () => {
  return (
    <div>
      <main>
        <article>
          <br />
          <br />
          <br />
          <br />
          <br /><br /><br />
          <Hero />
          <br /><br /><br /><br /><br />
          <Section_2/>
          <br />
          <br />
          <br />
          <Section_3/>
          <br />
          <br />
          <Section_4/>
          <br />
          <br />
          {/* <Section_5/> */}
          <Section_6/>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Section_7/>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Section_8/>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Section_9/>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Section_10/>
          <br />
          <br />
          <br />
        </article>
      </main>
    </div>
  )
}

export default Home;