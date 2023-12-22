-- CreateTable
CREATE TABLE "todo" (
    "id" UUID NOT NULL,
    "todo_list" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "isDone" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "todo_pkey" PRIMARY KEY ("id")
);
