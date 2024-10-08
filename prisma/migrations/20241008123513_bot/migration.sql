/*
  Warnings:

  - You are about to drop the column `message` on the `Chat` table. All the data in the column will be lost.
  - You are about to drop the column `senderType` on the `Chat` table. All the data in the column will be lost.
  - Added the required column `title` to the `Chat` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Chat" DROP COLUMN "message",
DROP COLUMN "senderType",
ADD COLUMN     "title" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Response" (
    "id" SERIAL NOT NULL,
    "chatId" INTEGER NOT NULL,
    "message" TEXT NOT NULL,
    "senderType" "SenderType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Response_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Response" ADD CONSTRAINT "Response_chatId_fkey" FOREIGN KEY ("chatId") REFERENCES "Chat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
