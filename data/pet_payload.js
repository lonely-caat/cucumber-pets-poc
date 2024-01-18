function createPetPayload({
  id = Math.floor(Math.random() * 10000),
  name = 'kitty',
  specialCharacters = false,
} = {}){

  return {
    id,
    category: { id: 0, name: 'string' },
    name: specialCharacters ? `${name}@#&*!` : name,
    photoUrls: ['string'],
    tags: [{ id: 0, name: 'string' }],
    status: 'available',
  };
}

const newPetPayload = createPetPayload();
const nonUniqueIDPetPayload = createPetPayload({ id: 'existing-id' }); // Replace with an actual non-unique ID
const specialNamePetPayload = createPetPayload({ specialCharacters: true });
const missingFieldsPetPayload = {}; // Missing all required fields
const nonUniqueNamePetPayload = createPetPayload({ name: 'existingPetName' }); // Replace with an actual non-unique name

module.exports = {
  newPetPayload,
  nonUniqueIDPetPayload,
  specialNamePetPayload,
  missingFieldsPetPayload,
  nonUniqueNamePetPayload,
};
