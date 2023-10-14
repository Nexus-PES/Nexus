const { PrismaClient } = require("@prisma/client");
const { team } = require('./team.js')
const prisma = new PrismaClient();

const load = async () => {
	try {
        const data = await prisma.team.createMany({
            data : team
        });
        console.log(data);
	} catch (e) {
		console.error(e);
		process.exit(1);
	} finally {
		await prisma.$disconnect();
	}
};
load();

