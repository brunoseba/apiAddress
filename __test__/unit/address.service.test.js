import { getAddressByCountry } from '../../src/services/address.services';
import Address from '../../src/models/address.model';
import { mongoose } from '@typegoose/typegoose';

describe('getAddressByCountry', () => {
  beforeAll(async () => {
    await mongoose.connect("mongodb://localhost:2017");
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  afterEach(async () => {
    await Address.deleteMany({});
  });

  it('returns an address when given a valid country', async () => {
    const seededAddress = new Address({
      street: '123 Main St.',
      city: 'Anytown',
      state: 'CA',
      postalCode: '12345',
      country: 'United States'
    });

    await seededAddress.save();

    const result = await getAddressByCountry('United States');

    expect(result).toHaveLength(1);
    //expect(result[0]._id).toEqual(seededAddress._id);
  });

  it('returns null when given an invalid country', async () => {
    const result = await getAddressByCountry('Invalid Country');

    expect(result).toBeNull();
  });
});
