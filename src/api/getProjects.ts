import prisma from "@/libs/prismadb";

export default async function getProjects() {
    try {
        const projects = await prisma.project.findMany({
            include: {
                Skills_Project: {
                    include: {
                        Skills: true,
                    },
                },
            },
        });
        return projects;
    } catch (err) {
        console.error("Erreur lors de la récupération des projets :", err);
        return [];
    }
}

getProjects()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
