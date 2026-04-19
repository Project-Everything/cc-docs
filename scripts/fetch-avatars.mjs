import fs from 'fs/promises';
import {createWriteStream} from 'fs';
import path from 'path';
import axios from 'axios';
import {finished} from 'stream/promises';

const BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;
const AVATAR_DIR = 'docs/public/team';

const TEAM_IDS = {
    ZavidLife: '135216817554718720',
    SpektrSoyuz: '169178866471010304',
    Moonerino: '356116821117501441',
    GH5T: '324283333984911361',
    Crowblers: '372572423855407116',
    MarshTheFish: '654363075473834005',
    xBumbleBee: '602685363521060897',
    _boat_man: '576845382848610324',
    Lil2Nun: '333505889245986816',
    Treasure_Man: '332699304835940354',
    MssrM00ny: '324116587059740673',
    Scorch5000: '397089429421817859',
    Jeffster1235: '500036670738006026'
};

async function downloadAvatar(name, id) {
    try {
        const {data} = await axios.get(`https://discord.com/api/v10/users/${id}`, {
            headers: {Authorization: `Bot ${BOT_TOKEN}`}
        });

        const avatarUrl = data.avatar
            ? `https://cdn.discordapp.com/avatars/${id}/${data.avatar}.png?size=256`
            : `https://cdn.discordapp.com/embed/avatars/${(id >> 22) % 6}.png`;

        const filePath = path.join(AVATAR_DIR, `${name}.png`);
        const writer = createWriteStream(filePath);

        const response = await axios({
            url: avatarUrl,
            method: 'GET',
            responseType: 'stream'
        });

        response.data.pipe(writer);
        await finished(writer);

        console.log(`Updated: ${name}`);
    } catch (err) {
        console.error(`Failed ${name}: ${err.response?.status || err.message}`);
    }
}

async function run() {
    try {
        await fs.mkdir(AVATAR_DIR, {recursive: true});

        const tasks = Object.entries(TEAM_IDS).map(([name, id]) => downloadAvatar(name, id));
        await Promise.all(tasks);

        console.log('All downloads finished.');
    } catch (err) {
        console.error('Initialization error:', err);
    }
}

run().then(r => r);