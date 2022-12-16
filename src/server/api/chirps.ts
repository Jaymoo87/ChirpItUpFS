import { Query } from './index';
import { IChirp } from '../../client/types';




const allChirps = async () => Query<string[]>('SELECT * FROM chirps');
const oneChirp = async (chirpid: number) => Query<string[]>('SELECT * FROM chirps WHERE id=?', [chirpid])
const postChirp = async (userid: string, content: string, location: string) => Query("INSERT into chirps (userid, content, location) values (?, ?, ?)", [userid, content, location]);
const editChirp = async (chirpToEdit: IChirp, id: number) => Query(`UPDATE chirps SET ? WHERE id = ?`, [chirpToEdit, id]);
const deleteChirp = async (chirpid: number) => Query('DELETE FROM chirps WHERE id=?', [chirpid])

export default {
    allChirps,
    oneChirp,
    deleteChirp,
    postChirp,
    editChirp
}