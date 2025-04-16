-- CreateTable
CREATE TABLE "CookieLogs" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CookieLogs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RequestLogs" (
    "id" SERIAL NOT NULL,
    "roundtrip" DOUBLE PRECISION NOT NULL,
    "status" INTEGER NOT NULL,
    "headers" TEXT NOT NULL,
    "html" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RequestLogs_pkey" PRIMARY KEY ("id")
);
