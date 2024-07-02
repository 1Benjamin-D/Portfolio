import getProjects from "@/api/getProjects";
import Image from 'next/image';
import Link from 'next/link';

export default async function Projects() {
    const projects = await getProjects();

    return (
        <div>
            <div className="title" id='projects' tabIndex={21}>
                <h2 className=' mb-[70px] font-DeadSpaceTitle text-4xl'>P r o j e c t s</h2>
            </div>
            <ul className="flex flex-col gap-12">
                {projects.map((project: any, index: number) => (
                    <div key={project.id} className='p-6'>
                        {index % 2 === 0 ? (
                            <div className=" flex flex-col md:flex-row gap-4 hover:bg-slate-500 p-4 rounded-lg relative">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-[#9B1D20] blur-sm md:left-[-0.575rem] md:bottom-[-0.575rem] z-0 bottom-[-0.575rem] rounded-2xl" />
                                    <div className="relative w-full h-full">
                                        <Image src={project.image} alt={project.slug} width={1000} height={1000} className='w-full h-full z-10 object-cover rounded-lg' />
                                    </div>
                                </div>
                                <div className='flex flex-col gap-5 font-Orienta_Regular justify-center'>
                                    <span className="title2">
                                        <li className='text-center font-falconpunchstraight decoration-solid underline text-lg'><h2>{project.title}</h2></li>
                                    </span>
                                    <p className=" font-Orienta_Regular">{project.description}</p>
                                    <div className="flex items-center justify-center gap-10">
                                        <Link href={project.giturl}><Image src={"/images/File.png"} alt="git_link" width={70} height={70} /></Link>
                                        {project.weburl && <Link href={project.weburl}><Image src={"/images/WWW.png"} alt="web_link" width={70} height={70} /></Link>}
                                    </div>
                                    <div className='flex flex-row justify-around'>
                                        {project.Skills_Project.map((projectSkill: any) => (
                                            <Image key={projectSkill.id} src={projectSkill.Skills.image} alt={projectSkill.Skills.title} width={1000} height={1000} style={{ width: "40px", height: "auto" }} />
                                        ))}
                                    </div>
                                </div>

                            </div>
                        ) : (
                            <div className="flex flex-col md:flex-row-reverse gap-4 hover:bg-slate-500 p-4 rounded-lg relative">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-[#9B1D20] blur-sm md:right-[-0.75rem] md:bottom-[-0.575rem] z-0 bottom-[-0.575rem] rounded-2xl" />
                                    <div className="relative w-full h-full">
                                        <Image src={project.image} alt={project.slug} width={1000} height={1000} className='w-full h-full z-10 object-cover rounded-lg' />
                                    </div>
                                </div>
                                <div className='flex flex-col gap-5 font-Orienta_Regular justify-center'>
                                    <div className="flex flex-col gap-5">
                                        <span className="title2">
                                            <li className='text-center font-falconpunchstraight decoration-solid underline text-lg'><h2>{project.title}</h2></li>
                                        </span>
                                        <p>{project.description}</p>
                                        <div className="flex items-center justify-center gap-10">
                                            <Link href={project.giturl}><Image src={"/images/File.png"} alt="git_link" width={70} height={70} /></Link>
                                            {project.weburl && <Link href={project.weburl}><Image src={"/images/WWW.png"} alt="web_link" width={70} height={70} /></Link>}
                                        </div>
                                    </div>
                                    <div className='flex flex-row justify-around'>
                                        {project.Skills_Project.map((projectSkill: any) => (
                                            <Image key={projectSkill.id} src={projectSkill.Skills.image} alt={projectSkill.Skills.title} width={1000} height={1000} style={{ width: "40px", height: "auto" }} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </ul>

        </div>
    )
}