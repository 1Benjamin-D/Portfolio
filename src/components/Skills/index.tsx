import getSkills from "@/api/getSkills";
import Image from "next/image";

export default async function Skills() {
  const skills = await getSkills();
  return (
    <div>
      <div className="title" id="skills" tabIndex={8}>
        <h2 className=' mb-[70px] font-DeadSpaceTitle text-4xl'>S k i l l s</h2>
      </div>
      <ul className='grid lg:grid-cols-4 grid-rows-4 gap-6 text-center items-center justify-center  grid-cols-2'>
        {skills.map((skills: any , index: number) => (
          <div key={skills.id} className='flex flex-col items-center'>
            <Image aria-hidden="true" src={skills.image} alt={skills.title} className='' width={1000} height={1000} style={{ width: "80px", height: "auto" }} />
            <div>
              <p className=' font-Luciole' tabIndex={index+9}>{skills.title}</p>
            </div>
          </div>
        ))}
      </ul>
    </div>
  )
}