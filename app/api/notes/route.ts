import { prismaClient } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const CreateNotesSchema = z.object({
  title: z.string(),
  content: z.string(),
});

export async function POST(req: NextRequest) {
  try {
    const notesData = CreateNotesSchema.parse(await req.json);
    const { title, content } = notesData;
    const slug = title.split(" ")[0];

    const data = await prismaClient.notes.create({
      data: {
        slug,
        content,
        title,
      },
    });

    console.log(data);

    return NextResponse.json({
      data,
      message: "Note Created successfully",
    });
  } catch (error) {
    console.log(error);
  }
}

export async function GET(req: NextRequest) {
  try {
    const notes = await prismaClient.notes.findMany();
    if(!notes){
        return NextResponse.json({
            message: "Can't find notes" 
        },{
            status:404
        })
    }
    return NextResponse.json(
      {
        data: notes,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error happpend while fetching notes",
      },
      {
        status: 411,
      }
    );
  }
}
