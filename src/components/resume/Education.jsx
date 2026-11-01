import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      // className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
      className="w-full flex flex-col md:flex-row gap-10 md:gap-20"
    >
      {/* part one */}
      <div className='lg:w-1/2'>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.E. in Computer Science"
            subTitle="Chitkara University, Himachal Pradesh (2022 - 2026)"
            result="8.2/10"
            des="Passionate about solving coding challenges and building efficient solutions. Constantly exploring new technologies, writing clean code, and refining problem-solving skills. Aspiring software developer, eager to create impactful applications and innovate in the tech world."
          />
          <ResumeCard
            title="Higher Secondary Education"
            subTitle=" GD College, Begusarai (2020 - 2022)"
            result="71.80/100"
            des="Completed 11th and 12th grade with a focus on Science, strengthening my analytical and problem-solving skills."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="RKC +2 High School (2020)"
            result="81.60/100"
            des="Successfully completed my 10th-grade education under the BSEB, building a strong academic foundation."
          />
        </div>
      </div>
      {/* part Two */}

      <div className="lg:w-1/2">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Software Engineer"
            subTitle="Google Out Tech - (2017 - Present)"
            result="USA"
            des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Apple Developer Team - (2012 - 2016)"
            result="MALAYSIA"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education