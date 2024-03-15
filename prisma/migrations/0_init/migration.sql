-- CreateTable
CREATE TABLE "Contact" (
    "id" BIGSERIAL NOT NULL,
    "image" VARCHAR,
    "title" TEXT NOT NULL,
    "url" TEXT,
    "coordonnee" TEXT,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EducationExp" (
    "id" BIGSERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "date" DATE NOT NULL,

    CONSTRAINT "EducationExp_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" BIGSERIAL NOT NULL,
    "image" VARCHAR NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "slug" TEXT,
    "giturl" VARCHAR NOT NULL,
    "weburl" VARCHAR,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skills" (
    "id" BIGSERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "image" VARCHAR NOT NULL,

    CONSTRAINT "Skills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skills_Project" (
    "id" BIGSERIAL NOT NULL,
    "Poject_id" BIGINT NOT NULL,
    "Skills_id" BIGINT NOT NULL,

    CONSTRAINT "Skills_Project_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Skills_Project" ADD CONSTRAINT "public_Skills_Project_Poject_id_fkey" FOREIGN KEY ("Poject_id") REFERENCES "Project"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Skills_Project" ADD CONSTRAINT "public_Skills_Project_Skills_id_fkey" FOREIGN KEY ("Skills_id") REFERENCES "Skills"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

