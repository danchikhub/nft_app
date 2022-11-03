export const getNFTItems = async () => {
  const response = await fetch(
    "https://api.opensea.io/api/v1/assets?format=json"
  );
  const items = response.json();
  return items;
};

export const getNFTItemsCursor = async (cursor) => {
  const response = await fetch(
    `https://api.opensea.io/api/v1/assets?format=json&cursor=${cursor}`
  );
  const items = response.json();
  return items;
};

export const getNFTItem = async (address, token_id) => {
  const response = await fetch(
    `https://api.opensea.io/api/v1/asset/${address}/${token_id}`
  );
  const item = response.json();
  return item;
};
