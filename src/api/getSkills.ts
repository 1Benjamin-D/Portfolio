import prisma from "@/libs/prismadb";

export default async function getSkills() {
    try {
        const skills = await prisma.skills.findMany({
            where: {
                OR: [
                    {
                        id: {
                            gte: 1,
                            lte: 10,
                        },
                    },
                    {
                        id: {
                            in: [13, 14],
                        },
                    },
                ],
            },
        });
        return skills;
    } catch (err) {
        console.error("Erreur lors de la récupération des compétences :", err);
        return [];
    }
}

getSkills()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
