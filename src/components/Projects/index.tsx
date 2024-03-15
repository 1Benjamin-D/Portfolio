import getProjects from "@/api/getProjects"
import Image from 'next/image';
import Link from 'next/link';

export default async function Projects() {
    const projects = await getProjects();

    return (
        <div>
            <p className=' mb-[70px]'>Projets</p>
            <ul className="flex flex-col gap-12">
                {projects.map((project: any, index: number) => (
                    <div key={project.id} className='p-6'>
                        {index % 2 === 0 ? (
                            <div className=" flex flex-col md:flex-row gap-4 hover:bg-slate-500 p-4 rounded-lg">
                                <Image src={project.image} alt={project.slug} width={1000} height={1000} className='w-[500px] h-auto m-auto' />
                                <div className='flex flex-col gap-5'>
                                    <li className='text-center'><h2>{project.title}</h2></li>
                                    <p>{project.description}</p>
                                    <p>Repository: <Link href={project.giturl}>{project.giturl}</Link></p>
                                    {project.weburl && <p>Website: <Link href={project.weburl}>{project.weburl}</Link></p>}
                                    <div className='flex flex-row justify-around'>
                                        {project.Skills_Project.map((projectSkill: any) => (
                                            <Image key={projectSkill.id} src={projectSkill.Skills.image} alt={projectSkill.Skills.title} width={1000} height={1000} style={{ width: "30px", height: "auto" }} />
                                        ))}
                                    </div>
                                </div>

                            </div>
                        ) : (
                            <div className="flex flex-col md:flex-row-reverse gap-4 hover:bg-slate-500 p-4 rounded-lg">
                                <Image src={project.image} alt={project.slug} width={1000} height={1000} className='w-[500px] h-auto m-auto' />
                                <div className='flex flex-col gap-5'>
                                    <li className='text-center'><h2>{project.title}</h2></li>
                                    <p>{project.description}</p>
                                    <p>Repository: <Link href={project.giturl}>{project.giturl}</Link></p>
                                    {project.weburl && <p>Website: <Link href={project.weburl}>{project.weburl}</Link></p>}
                                    <div className='flex flex-row justify-around'>
                                        {project.Skills_Project.map((projectSkill: any) => (
                                            <Image key={projectSkill.id} src={projectSkill.Skills.image} alt={projectSkill.Skills.title} width={1000} height={1000} style={{ width: "30px", height: "auto" }} />
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