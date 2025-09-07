import { neon } from '@neondatabase/serverless';

const sql = neon(`${process.env.DATABASE_URL}`);

export async function POST(request: Request) {
  try {
    const sql = neon(`${process.env.DATABASE_URL}`);
    const { name, email, clerkId } = await request.json();
    if (!name || !email || !clerkId) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }
    const response = await sql`
      INSERT INTO users (
        name,
        email,
        clerk_id
      )
      VALUES (
        ${name},
        ${email},
        ${clerkId}
      )
      `;
    return new Response(JSON.stringify({ data: response }), { status: 201 })
  } catch (error) {
    console.log(error);
    return Response.json({ error: error }, { status: 500 });
  }
}



















































// import { ExpoRequest, ExpoResponse } from "expo-router/server";

// export async function POST(request: Request) {
//   try {
//     const { userId, email, name } = await request.json();

//     // Here you would typically create a new user in your database
//     // For example, using Prisma, Drizzle, or your preferred ORM.
//     console.log("Creating user in database with the following details:");
//     console.log("Clerk User ID:", userId);
//     console.log("Email:", email);
//     console.log("Name:", name);

//     // For now, we'll just simulate a successful user creation
//     const newUser = {
//       id: Math.random().toString(36).substring(7),
//       clerkId: userId,
//       email,
//       name,
//     };

//     return ExpoResponse.json(newUser, { status: 201 });
//   } catch (error) {
//     console.error("Error creating user:", error);
//     return ExpoResponse.json({ error: "Failed to create user" }, { status: 500 });
//   }
// }
