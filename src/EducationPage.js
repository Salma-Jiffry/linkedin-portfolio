import React from 'react';
import { GiAchievement } from 'react-icons/gi';

const EducationPage = () => {
  return (
    <div className='educationalpage' id='3'>
      <div>
        <h1 className='edu-heading'>Education</h1>
      </div>
      <main className='educontainer'>


    <div className='edubox'>
        <div className='content'>
            <GiAchievement />
            <h4>BEng (Hons) in Software Engineering (Reading)</h4>
        </div>
        <br />
            <div>
                <p className='edu-para'>Currently enrolled in a BEng (Hons) program in Software Engineering, aiming to broaden my skills in crafting efficient, reliable, and scalable software solutions.</p>
            </div>
    </div>


        

    <div className='edubox'>
  <div className='content'>
    <GiAchievement />
    <h4>Higher National Diploma in Computing (HND)</h4>
  </div>
  <br />
  <div>
    <p className='edu-para'>Successfully completed the Higher National Diploma in Computing with an overall grade of Distinction, showcasing advanced proficiency across various computing disciplines.</p>
  </div>
</div>

<div className='edubox'>
  <div className='content'>
    <GiAchievement />
    <h4>Diploma in Information Technology</h4>
  </div>
  <br />
  <div>
    <p className='edu-para'>Successfully completed the Diploma in Information Technology with an overall grade of Distinction in 2021.</p>
  </div>
</div>

<div className='edubox'>
  <div className='content'>
    <GiAchievement />
    <h4>GCE Advanced Level (Commerce stream)</h4>
  </div>
  <br />
  <div>
    <p className='edu-para'>Successfully completed GCE Advanced Level in commerce stream at Gampola Zahira College in 2020.</p>
  </div>
</div>

<div className='edubox'>
  <div className='content'>
    <GiAchievement />
    <h4>GCE Ordinary Level</h4>
  </div>
  <br />
  <div>
    <p className='edu-para'>Successfully completed GCE Ordinary Level examination at Gampola Zahira College in 2017.</p>
  </div>
</div>

<div className='edubox'>
  <div className='content'>
    <GiAchievement />
    <h4>Diploma in English - Level 3</h4>
  </div>
  <br />
  <div>
    <p className='edu-para'>Successfully completed the Diploma in English - Level 3 at American College of Higher Education in 2018.</p>
  </div>
</div>
        
      </main>
    </div>
  );
}

export default EducationPage;