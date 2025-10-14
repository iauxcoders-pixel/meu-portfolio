import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function POST(request) {
  try {
    const { titulo, imagem_url } = await request.json();

    if (!titulo || typeof titulo !== "string") {
      return Response.json({ error: "Campo 'titulo' é obrigatório" }, { status: 400 });
    }

    const { data, error } = await supabaseAdmin
      .from("projetos")
      .insert({ titulo, imagem_url })
      .select()
      .single();

    if (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }

    return Response.json(data, { status: 201 });
  } catch (e) {
    return Response.json({ error: "Pedido inválido" }, { status: 400 });
  }
}