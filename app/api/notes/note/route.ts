import { prismaClient } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { title } from "process";
import { z } from "zod";

export async function GET(req: NextRequest) {
  try {
    const id = req.nextUrl.searchParams.get("id");
    if (!id) {
      return NextResponse.json(
        {
          message: "Invalid Id",
        },
        {
          status: 400,
        }
      );
    }
    const note = await prismaClient.notes.findUnique({
      where: {
        id: id,
      },
    });

    if (!note) {
      return NextResponse.json(
        {
          message: "Note not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(
      {
        data: note,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error while fetching notes",
      },
      {
        status: 411,
      }
    );
  }
}

const CreateNotesSchema = z.object({
  newTitle: z.string(),
  newContent: z.string(),
});

export async function PATCH(req: NextRequest) {
  try {
    const newNote = CreateNotesSchema.parse(await req.json());
    const {newTitle, newContent} = newNote;
    const id = req.nextUrl.searchParams.get("id");
    if (!id) {
      return NextResponse.json(
        {
          message: "Invalid Note id",
        },
        {
          status: 400,
        }
      );
    }

    const updateNoteObj = {
        slug: newTitle.split(" ")[0],
        title: newTitle,
        content: newContent
    }

    const note = await prismaClient.notes.update({
        where: {
            id: id
        },
        data: updateNoteObj
    })

    if (!note) {
      return NextResponse.json(
        {
          message: "Note couldn't be updated",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
        data : note,
        message: "Note updated successfully"
    },{
        status: 200
    })

  } catch (error) {
    return NextResponse.json(
        {
          message: "Error while updating notes",
        },
        {
          status: 400,
        }
      );
  }
}


export async function DELETE(req: NextRequest) {
  try {
    const id = req.nextUrl.searchParams.get("id");
    if (!id) {
      return NextResponse.json(
        {
          message: "Invalid Id",
        },
        {
          status: 400,
        }
      );
    }
    const note = await prismaClient.notes.delete({
      where: {
        id: id,
      },
    });

    if (!note) {
      return NextResponse.json(
        {
          message: "Note not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(
      {
        data: note,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error while deleting notes",
      },
      {
        status: 411,
      }
    );
  }
}