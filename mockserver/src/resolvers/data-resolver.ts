import _data from '../../database/db.json';
import {DataResolverType} from '../typings/data'

export function dataResolver (req, res): void {
    const data = _data as DataResolverType;
    res.send(data);
}