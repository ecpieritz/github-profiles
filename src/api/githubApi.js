// githubApi.js
import axios from 'axios';

// Coloque a chave privada aqui (remova os espaços em branco e quebras de linha)
const privateKey = `MIIEpAIBAAKCAQEApwdUq19i9LkD1M5OQ47+AS1otF0VeEvfp0LE5fqR1Dr5U9Y5FTw31iqnac4VtbBdr1zP2bfNp9moBU4Mfo5FL+56vVvP2j10Cvc6LQO6vHaKA1vC+NjA//xDyAVn+q75PrNo5DwFiy0Rum2Qlq7RDr2zf5PFerkR08hPJB11CM4nEeANEu+msiqCzTlq0xCVO+ZeJoFilmgX9X7rPpA0K/IzvmhuEuJoJmVZ5XVCT0vT2Me9IHnvPD7gz/YX8qZczoJtie8tdBJDJlAx0chDW5EyzKKzTHMMoPD5jP3PzCdkfuxNGZhG7eLa2e7Qut83lImkNiSKMdSxEApIEsOiIwIDAQABAoIBAAq+DvUCqoOgzp1GM4Rm0vFScVSAVBwrjRPd2HoOFoj2zghVU9CI0fKFRcUpSv4nfK8FohyXlLOB7SuCLI2LKun9RYmeOQ0JPMhjxCsW/VCXsyKqKS0GC8uq9tULe/eEf2VH9qwPLDAaUvSRjWYTkkCHdN70qxPMiVf8nxJsjpVlSkGvuPTx4XmrhqWMKG+LjOmoUnrXE2XTrlQ0I3AVcm82JYTemWtXtlGBYWof5YEPOozUCdBXF9lwncmwBqu7MMpUOh36+50Eev5Y8tjXrhXgdoKlJo2edqgn1aKKAIGmSpVaCvTB/nx2ZgqWXn9srwwvnmdrXcoPLiQx48VjGNECgYEA1trjj/HnR9rKrc/j8aY1BBsgWxI3vf3EqAhFdJHHSrK8kGNFF/feaamIK4Gn+G3Xo58eMFYkRe2ykRs5W/UVLF6au7kD6UFWBFo9URyWRbwXlJ+pcVqzHbi0OkOVWy2SBs0nkm6wnM2zj0wdCzFEdSlTuidvNqWUhUoYHEE3fbsCgYEAxwPJnTeyZ3428BK5gXQKXbuyBY8+RV5y9foSbrSBVYros+AFIh6XTFZgQNKgEC9FsFAZQ6RR4l2kl3oT/Uu9+vVW/uB2ElWXf+qBdxn78MYhWIFqo3/epgw5PL5YikMwWUhLLcX++N80bVLhjsRDk0vFF7pr4m68Lj2XzIH98rkCgYBpWcUxhNT6N78gAQrtJ6lhTQfNgB5TC8bM+dlMslp9Ny0cw4BSo1isiNNbOeUp/Ho7Ib+ExghdPZNMcYProj3ylqTanXrcegv6cGEWj6TjproNR0ina2jejv3Yf+ERZ0PuD9RyidIR4Q9FmXW4Uj0WEeCbK9Dtg71SqiUuXZAfFwKBgQCLMG718lpoX7H0vmPX0lzdqcScds7KnYAx4TC7FKvQNFMEWw28C0EuNssjCyy/pRBMe/jvgiFy/KN8/fi1EyBQQP8TS9HIiOxono7lydqXTztLN1hp+aiy4aG2hjpOmSdbimBqJyxoy1NTksAGpeXNQxUZv1xtBZ2/iXx9n/0IoQKBgQCqM6TvMBY/iZjWNGCwH5JTVry2F3tCWsgPIykPn/7KOCYrOnhRqI6/1eXerP56rOS2ZGVZd76fuh8O7+Jxpv/o/LNu3Xoog1JFerJHnRlZV8JsLd6J29jqXbf2f3eai9rQjaSNHdZwt2sds4KkH90YiXaghfIzT/I5bkFm0BHGJg==`;

const instance = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'Authorization': privateKey
  }
});

export default {
  getUser(username) {
    return instance.get(`/users/${username}`);
  },

  getUserBio(username) {
    return instance.get(`/users/${username}`)
      .then(response => response.data.bio);
  }
};
