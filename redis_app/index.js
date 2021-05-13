import Redis from 'ioredis';
import Strings from './strings';
import Hashes from './hashes';

const redis = new Redis({ password: 'foobared123'});

Strings(redis);
Hashes(redis);

