import supabase from "./supabase";

// ============================ GET ALL PLANTS ================================ //

export async function getPlants([filters], { sortBy }) {
  let query = supabase.from("plants").select("*");
  // console.log(filters);

  // ---------------------- FILTER ---------------------------- //
  if (filters.length) {
    // console.log("Working");
    for (const { field, method, value } of filters) {
      query = query[method](field, value);
    }
  }
  // ---------------------- Sort ---------------------------- //

  if (sortBy.field && sortBy.field !== "featured")
    query = query.order(sortBy.field, {
      ascending: sortBy?.direction === "asc",
    });

  const { data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error("Plants could not be loaded");
  }
  // console.log(data);

  return data;
}

// ============================ GET PLANT BY ID ============================ //

export async function getPlantByID(id) {
  const { data, error } = await supabase.from("plants").select().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Selected plant could not be loaded");
  }
  // console.log(data);
  return data;
}

// ============================ GET PLANT BY MAIN_NAME ============================ //

export async function getPlantByMain_Name(name) {
  const { data, error } = await supabase
    .from("plants")
    .select("*")
    .eq("main_name", name);

  if (error) {
    console.error(error);
    throw new Error("Selected plant could not be loaded");
  }
  // console.log(data);
  return data;
}

// ============================ GET ALL LIGHT ============================ //

export async function getAllLight() {
  let { data, error } = await supabase.from("light").select("*");

  // console.log(data);

  if (error) {
    console.error(error);
    throw new Error("Selected plant could not be loaded");
  }

  return data;
}
// ============================ GET ALL CARE ============================ //

export async function getAllCare() {
  let { data, error } = await supabase.from("care").select("*");

  // console.log(data);

  if (error) {
    console.error(error);
    throw new Error("Selected plant could not be loaded");
  }

  return data;
}
// ============================ GET ALL WATER ============================ //

export async function getAllWater() {
  let { data, error } = await supabase.from("water").select("*");

  if (error) {
    console.error(error);
    throw new Error("Water data could not be loaded");
  }
  // console.log(data);
  return data;
}

// ============================ CREATE WATER ================================= //

export async function createWater(newWater) {
  const { data, error } = await supabase
    .from("water")
    .insert([newWater])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Water data could not be created");
  }
  // console.log(data);
  return data;
}

// ============================ DELETE WATER BY ID ============================ //

export async function deleteWaterById(id) {
  const { error } = await supabase.from("water").delete().eq("id", id);
  if (error) {
    throw new Error("Water data could not be deleted");
  }
}

// ============================ GET ALL PET FRIENDLY ============================ //

export async function getAllPetFriendly() {
  let { data, error } = await supabase.from("pet_friendly").select("*");
  // console.log(data);

  if (error) {
    console.error(error);
    throw new Error("Pet-friendly data could not be loaded");
  }

  return data;
}
// ============================ GET ALL Prices ============================ //

export async function getAllPrices() {
  const { data, error } = await supabase.from("price").select("*");

  if (error) {
    console.error(error);
    throw new Error("Pet-friendly data could not be loaded");
  }
  // console.log(data);
  return data;
}

// ============================ GET ALL UI DATA  ============================ //

export async function getAllUIData() {
  const { data, error } = await supabase.from("page_ui_data").select("*");

  if (error) {
    console.error(error);
    throw new Error("Page UI data could not be loaded");
  }
  // console.log(data);
  return data;
}

// ============================ GET ALL Hero Images ============================ //

export async function getAllHero() {
  const { data, error } = await supabase.from("hero").select("*");

  if (error) {
    console.error(error);
    throw new Error("Hero data could not be loaded");
  }
  // console.log(data);
  return data;
}

// ---------------------- GET ALL BLOG DATA  ----------------------------- //

export async function getAllBlogPosts() {
  const { data, error } = await supabase.from("blog").select("*");
  if (error) {
    console.error(error);
    throw new Error("Hero data could not be loaded");
  }
  // console.log(data);
  return data;
}

// ---------------------- GET POST BY TITLE ----------------------------- //

export async function getPostByTitle(title) {
  const { data, error } = await supabase
    .from("blog")
    .select("*")
    .ilike("title", title);

  if (error) {
    console.error(error);
    throw new Error("Selected plant could not be loaded");
  }
  // console.log(data);
  return data;
}


// ------- 4 Products By Random Filter -------
export async function getRandomProductsByFilter(obj) {
  const { data, error } = await supabase
    .from("plants")
    .select("*")
    .match(obj)
    .limit(4);

  if (error) {
    console.error(error);
    throw new Error("Selected plant with filter could not be loaded");
  }
  // console.log(data);
  return data;
}
