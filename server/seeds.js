if (Posts.find().count() === 0) {
    Posts.insert({
        title: 'Last Anixile RPG - Revived',
        body: 'Man hat ja sonst nichts zu tun..'
    });

    Posts.insert({
        title: 'Mithelfer gesucht!',
        body: 'Gerne auch frühere Spieler um wiederherzustellen was mal war ;-)'
    });
}