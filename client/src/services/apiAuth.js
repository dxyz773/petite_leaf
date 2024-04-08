import supabase from "./supabase";

export async function signup({ firstName, lastName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        firstName,
        lastName,
        phoneNumber: "",
        avatar: "",
        birthday: "",
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function logout() {
  let { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}

export async function updateCurrentUser({
  firstName,
  lastName,
  phoneNumber,
  birthday,
  password,
  avatar,
}) {
  let updateData;
  if (password) {
    updateData = { password };
  }
  if (firstName || lastName || phoneNumber || birthday) {
    updateData = {
      data: {
        firstName,
        lastName,
        phoneNumber,
        birthday,
      },
    };
  }

  const { data, error } = await supabase.auth.updateUser(updateData);

  if (error) throw new Error(error.message);

  if (!avatar) return data;

  const fileName = `avatar-${data.user.id}-${Math.random()}`;

  const { error: avatarError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);

  if (avatarError) throw new Error(error.message);

  const { data: updatedUser, error: updatedError } =
    await supabase.auth.updateUser({
      data: {
        avatar: `https://hxxoafnewtclypqeirzg.supabase.co/storage/v1/object/public/avatars/${fileName}`,
      },
    });

  if (updatedError) throw new Error(updatedError.message);
  return updatedUser;
}

// ------------------------------ USER FAVORITES ---------------------------- //

export async function getFavoritesByUserId(id) {
  const { data, error } = await supabase
    .from("favorites")
    .select("*")
    .eq("user_id", id);

  if (error) throw new Error(error.message);
  return data;
}

export async function addFavorite(id, favorite) {
  const { data, error } = await supabase
    .from("favorites")
    .insert([{ user_id: id, favorite: favorite }])
    .select();

  if (error) throw new Error(error.message);
  return data;
}

export async function removeFavorite(id) {
  const { error } = await supabase.from("favorites").delete().eq("id", id);

  if (error) throw new Error(error.message);
}

export async function registerOrder({ order_data, user_id }) {
  const { data, error } = await supabase
    .from("orders")
    .insert([{ order_data, user_id }])
    .select();

  if (error) throw new Error(error.message);

  return data;
}

export async function getOrdersByOrderNumber(order_num) {
  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .eq("order_number", order_num);

  if (error) throw new Error(error.message);

  return data;
}

export async function getOrdersByUserID(id) {
  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .eq("user_id", id);

  if (error) throw new Error(error.message);

  return data;
}

// ------------------------ ADDRESSES ----------------------------- //

export async function addAddress({
  firstName,
  lastName,
  address,
  apt,
  city,
  state,
  company,
  zipCode,
  country,
  user_id,
  nickname,
  phoneNumber,
}) {
  const { data, error } = await supabase
    .from("addresses")
    .insert([
      {
        nickname,
        firstName,
        lastName,
        address,
        apt,
        city,
        state,
        company,
        zipCode,
        country,
        user_id,
        phoneNumber,
      },
    ])
    .select();

  if (error) throw new Error(error.message);

  return data;
}

export async function getAddressesByUserId(id) {
  const { data, error } = await supabase
    .from("addresses")
    .select("*")
    .eq("user_id", id);

  if (error) throw new Error(error.message);

  return data;
}

export async function updateAddressByAddressId({
  id,
  nickname,
  firstName,
  lastName,
  address,
  apt,
  city,
  state,
  company,
  zipCode,
  country,
  phoneNumber,
}) {
  const { data, error } = await supabase
    .from("addresses")
    .update({
      nickname,
      firstName,
      lastName,
      address,
      apt,
      city,
      state,
      company,
      zipCode,
      country,
      phoneNumber,
    })
    .eq("id", id)
    .select();

  if (error) throw new Error(error.message);

  return data;
}

export async function deleteAddress(id) {
  const { error } = await supabase.from("addresses").delete().eq("id", id);

  if (error) throw new Error(error.message);
}
