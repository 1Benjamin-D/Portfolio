import prisma from "@/libs/prismadb";

export default async function getContacts() {
    try {
        const contacts = await prisma.contact.findMany();
        return contacts;
    } catch (err) {
        console.error("Error fetching projects", err);
        return [];
    }
}

getContacts()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
