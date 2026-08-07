CREATE SCHEMA IF NOT EXISTS "public";

CREATE TYPE "Role" AS ENUM ('SUPER_ADMIN', 'ADMIN', 'SALES', 'EDITOR', 'PROJECT_MANAGER', 'VIEWER');
CREATE TYPE "PublishStatus" AS ENUM ('DRAFT', 'PUBLISHED', 'ARCHIVED');
CREATE TYPE "LeadStatus" AS ENUM ('NEW', 'CONTACTED', 'QUALIFIED', 'QUOTED', 'WON', 'LOST', 'SPAM');
CREATE TYPE "LeadPriority" AS ENUM ('LOW', 'NORMAL', 'HIGH', 'URGENT');

CREATE TABLE "User" (
  "id" TEXT NOT NULL, "name" TEXT NOT NULL, "email" TEXT NOT NULL, "role" "Role" NOT NULL DEFAULT 'VIEWER',
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "Service" (
  "id" TEXT NOT NULL, "slug" TEXT NOT NULL, "name" TEXT NOT NULL, "summary" TEXT NOT NULL, "content" TEXT,
  "benefits" TEXT[] NOT NULL, "deliverables" TEXT[] NOT NULL, "status" "PublishStatus" NOT NULL DEFAULT 'DRAFT',
  "order" INTEGER NOT NULL DEFAULT 0, "seoTitle" TEXT, "seoDescription" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "InvestmentPackage" (
  "id" TEXT NOT NULL, "slug" TEXT NOT NULL, "name" TEXT NOT NULL, "summary" TEXT NOT NULL,
  "machineMin" INTEGER NOT NULL, "machineMax" INTEGER NOT NULL, "priceFrom" INTEGER, "priceTo" INTEGER,
  "features" TEXT[] NOT NULL, "status" "PublishStatus" NOT NULL DEFAULT 'DRAFT', "featured" BOOLEAN NOT NULL DEFAULT false,
  "order" INTEGER NOT NULL DEFAULT 0, "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "InvestmentPackage_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "Project" (
  "id" TEXT NOT NULL, "slug" TEXT NOT NULL, "title" TEXT NOT NULL, "location" TEXT, "machineCount" INTEGER,
  "category" TEXT, "duration" TEXT, "summary" TEXT NOT NULL, "content" TEXT, "coverImage" TEXT, "gallery" TEXT[] NOT NULL,
  "status" "PublishStatus" NOT NULL DEFAULT 'DRAFT', "completedAt" TIMESTAMP(3),
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "Post" (
  "id" TEXT NOT NULL, "slug" TEXT NOT NULL, "title" TEXT NOT NULL, "excerpt" TEXT NOT NULL, "content" TEXT,
  "coverImage" TEXT, "category" TEXT, "status" "PublishStatus" NOT NULL DEFAULT 'DRAFT', "publishedAt" TIMESTAMP(3),
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "Faq" (
  "id" TEXT NOT NULL, "question" TEXT NOT NULL, "answer" TEXT NOT NULL, "category" TEXT,
  "order" INTEGER NOT NULL DEFAULT 0, "status" "PublishStatus" NOT NULL DEFAULT 'DRAFT',
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "Faq_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "Lead" (
  "id" TEXT NOT NULL, "code" TEXT NOT NULL, "name" TEXT NOT NULL, "phone" TEXT NOT NULL, "phoneNormalized" TEXT NOT NULL,
  "email" TEXT, "emailNormalized" TEXT, "company" TEXT, "message" TEXT, "source" TEXT, "referrer" TEXT,
  "utmSource" TEXT, "utmMedium" TEXT, "utmCampaign" TEXT, "status" "LeadStatus" NOT NULL DEFAULT 'NEW',
  "priority" "LeadPriority" NOT NULL DEFAULT 'NORMAL', "assignedToId" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "Lead_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "LeadNote" (
  "id" TEXT NOT NULL, "body" TEXT NOT NULL, "leadId" TEXT NOT NULL, "authorId" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP, CONSTRAINT "LeadNote_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "Estimate" (
  "id" TEXT NOT NULL, "leadId" TEXT, "areaSqm" INTEGER NOT NULL, "machineCount" INTEGER NOT NULL, "segment" TEXT NOT NULL,
  "configurationLevel" TEXT NOT NULL, "includeInterior" BOOLEAN NOT NULL DEFAULT true, "includeAircon" BOOLEAN NOT NULL DEFAULT false,
  "includeCamera" BOOLEAN NOT NULL DEFAULT false, "province" TEXT, "totalMin" INTEGER NOT NULL, "totalMax" INTEGER NOT NULL,
  "breakdown" JSONB NOT NULL, "calculationVersion" TEXT NOT NULL, "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "Estimate_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "Service_slug_key" ON "Service"("slug");
CREATE UNIQUE INDEX "InvestmentPackage_slug_key" ON "InvestmentPackage"("slug");
CREATE UNIQUE INDEX "Project_slug_key" ON "Project"("slug");
CREATE UNIQUE INDEX "Post_slug_key" ON "Post"("slug");
CREATE UNIQUE INDEX "Lead_code_key" ON "Lead"("code");
CREATE UNIQUE INDEX "Lead_phoneNormalized_key" ON "Lead"("phoneNormalized");
CREATE INDEX "User_createdAt_idx" ON "User"("createdAt");
CREATE INDEX "Service_status_createdAt_idx" ON "Service"("status", "createdAt");
CREATE INDEX "InvestmentPackage_status_createdAt_idx" ON "InvestmentPackage"("status", "createdAt");
CREATE INDEX "Project_status_createdAt_idx" ON "Project"("status", "createdAt");
CREATE INDEX "Post_status_publishedAt_idx" ON "Post"("status", "publishedAt");
CREATE INDEX "Faq_status_order_idx" ON "Faq"("status", "order");
CREATE INDEX "Lead_phone_idx" ON "Lead"("phone");
CREATE INDEX "Lead_email_idx" ON "Lead"("email");
CREATE INDEX "Lead_emailNormalized_idx" ON "Lead"("emailNormalized");
CREATE INDEX "Lead_status_createdAt_idx" ON "Lead"("status", "createdAt");
CREATE INDEX "Lead_createdAt_idx" ON "Lead"("createdAt");
CREATE INDEX "LeadNote_leadId_createdAt_idx" ON "LeadNote"("leadId", "createdAt");
CREATE INDEX "Estimate_leadId_createdAt_idx" ON "Estimate"("leadId", "createdAt");

ALTER TABLE "Lead" ADD CONSTRAINT "Lead_assignedToId_fkey" FOREIGN KEY ("assignedToId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "LeadNote" ADD CONSTRAINT "LeadNote_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES "Lead"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "LeadNote" ADD CONSTRAINT "LeadNote_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "Estimate" ADD CONSTRAINT "Estimate_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES "Lead"("id") ON DELETE SET NULL ON UPDATE CASCADE;
