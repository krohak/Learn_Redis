import Redis from 'ioredis';
import Strings from './strings';
import Hashes from './hashes';
import Lists from './Lists';
import Sets from './sets';
import SortedSets from './sortedSets';

const redis = new Redis({ password: 'foobared123'});

Strings(redis);
Hashes(redis);
Lists(redis);
Sets(redis);
SortedSets(redis);