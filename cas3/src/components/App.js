import Fruits from './Fruits';
import LicensePlates from './LicensePlates';
import Posts from './Posts'

const App = () => {
  let fruits = ['strawberry', 'raspberry', 'bannana', 'apple', 'kiwi'];
  let licensePlates = [
    { city: 'Skopje', number: 'SK-9999-AB' },
    { city: 'Tetovo', number: 'TE-9999-AB' },
    { city: 'Gostivar', number: 'GV-9999-AB' }
  ];

  /*let comments = [
    {
      'postId': 1,
      'id': 1,
      'name': 'id labore ex et quam laborum',
      'email': 'Eliseo@gardner.biz',
      'body': 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'
    },
    {
      'postId': 2,
      'id': 6,
      'name': 'et fugit eligendi deleniti quidem qui sint nihil autem',
      'email': 'Presley.Mueller@myrl.com',
      'body': 'doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in'
    },
    {
      'postId': 3,
      'id': 11,
      'name': 'fugit labore quia mollitia quas deserunt nostrum sunt',
      'email': 'Veronica_Goodwin@timmothy.net',
      'body': 'ut dolorum nostrum id quia aut est\nfuga est inventore vel eligendi explicabo quis consectetur\naut occaecati repellat id natus quo est\nut blanditiis quia ut vel ut maiores ea'
    },

    {
      'postId': 4,
      'id': 16,
      'name': 'perferendis temporibus delectus optio ea eum ratione dolorum',
      'email': 'Christine@ayana.info',
      'body': 'iste ut laborum aliquid velit facere itaque\nquo ut soluta dicta voluptate\nerror tempore aut et\nsequi reiciendis dignissimos expedita consequuntur libero sed fugiat facilis'
    },
    {
      'postId': 5,
      'id': 22,
      'name': 'porro repellendus aut tempore quis hic',
      'email': 'Khalil@emile.co.uk',
      'body': 'qui ipsa animi nostrum praesentium voluptatibus odit\nqui non impedit cum qui nostrum aliquid fuga explicabo\nvoluptatem fugit earum voluptas exercitationem temporibus dignissimos distinctio\nesse inventore reprehenderit quidem ut incidunt nihil necessitatibus rerum'
    },
    {
      'postId': 6,
      'id': 26,
      'name': 'in deleniti sunt provident soluta ratione veniam quam praesentium',
      'email': 'Russel.Parker@kameron.io',
      'body': 'incidunt sapiente eaque dolor eos\nad est molestias\nquas sit et nihil exercitationem at cumque ullam\nnihil magnam et'
    },
    {
      'postId': 7,
      'id': 31,
      'name': 'ex velit ut cum eius odio ad placeat',
      'email': 'Buford@shaylee.biz',
      'body': 'quia incidunt ut\naliquid est ut rerum deleniti iure est\nipsum quia ea sint et\nvoluptatem quaerat eaque repudiandae eveniet aut'
    },
    {
      'postId': 8,
      'id': 36,
      'name': 'sit et quis',
      'email': 'Raheem_Heaney@gretchen.biz',
      'body': 'aut vero est\ndolor non aut excepturi dignissimos illo nisi aut quas\naut magni quia nostrum provident magnam quas modi maxime\nvoluptatem et molestiae'
    },
    {
      'postId': 9,
      'id': 42,
      'name': 'nam qui et',
      'email': 'Shemar@ewell.name',
      'body': 'aut culpa quaerat veritatis eos debitis\naut repellat eius explicabo et\nofficiis quo sint at magni ratione et iure\nincidunt quo sequi quia dolorum beatae qui'
    },
    {
      'postId': 10,
      'id': 46,
      'name': 'dignissimos et deleniti voluptate et quod',
      'email': 'Jeremy.Harann@waino.me',
      'body': 'exercitationem et id quae cum omnis\nvoluptatibus accusantium et quidem\nut ipsam sint\ndoloremque illo ex atque necessitatibus sed'
    },
  ];*/
  return (
    <div id='app'>
      <Fruits fruits={fruits} />
      {/* Task 01 - Pass the licensePlates array as prop in the 
      LicensePlates component. Display the data from the licensePlates 
      array . */}
      <LicensePlates plates={licensePlates} />
      {/* Task 03 - Pass the cars array as prop in the Cars component. 
      Display the data from the cars array . */}
      <Posts posts={posts} />
      {/* Task 02 - Pass the comments array as prop in the Comments component. 
      Display the data from the comments array . */}
    </div>
  );
};

let posts = [
  {
    'userId': 1,
    'id': 1,
    'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    'body': 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    'comments': [
      {
        'postId': 1,
        'id': 1,
        'name': 'id labore ex et quam laborum',
        'email': 'Eliseo@gardner.biz',
        'body': 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'
      },
      {
        'postId': 1,
        'id': 2,
        'name': 'quo vero reiciendis velit similique earum',
        'email': 'Jayne_Kuhic@sydney.com',
        'body': 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et'
      },
      {
        'postId': 1,
        'id': 3,
        'name': 'odio adipisci rerum aut animi',
        'email': 'Nikita@garfield.biz',
        'body': 'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione'
      }
    ]
  },
  {
    'userId': 2,
    'id': 11,
    'title': 'et ea vero quia laudantium autem',
    'body': 'delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi',
    'comments': [
      {
        'postId': 11,
        'id': 51,
        'name': 'molestias et odio ut commodi omnis ex',
        'email': 'Laurie@lincoln.us',
        'body': 'perferendis omnis esse\nvoluptate sit mollitia sed perferendis\nnemo nostrum qui\nvel quis nisi doloribus animi odio id quas'
      },
      {
        'postId': 11,
        'id': 52,
        'name': 'esse autem dolorum',
        'email': 'Abigail.OConnell@june.org',
        'body': 'et enim voluptatem totam laudantium\nimpedit nam labore repellendus enim earum aut\nconsectetur mollitia fugit qui repellat expedita sunt\naut fugiat vel illo quos aspernatur ducimus'
      },
      {
        'postId': 11,
        'id': 53,
        'name': 'maiores alias necessitatibus aut non',
        'email': 'Laverne_Price@scotty.info',
        'body': 'a at tempore\nmolestiae odit qui dolores molestias dolorem et\nlaboriosam repudiandae placeat quisquam\nautem aperiam consectetur maiores laboriosam nostrum'
      }
    ]
  },
  {
    'userId': 3,
    'id': 26,
    'title': 'est et quae odit qui non',
    'body': 'similique esse doloribus nihil accusamus\nomnis dolorem fuga consequuntur reprehenderit fugit recusandae temporibus\nperspiciatis cum ut laudantium\nomnis aut molestiae vel vero',
    'comments': [
      {
        'postId': 26,
        'id': 126,
        'name': 'fuga tenetur id et qui labore delectus',
        'email': 'Alexie@alayna.org',
        'body': 'est qui ut tempore temporibus pariatur provident qui consequuntur\nlaboriosam porro dignissimos quos debitis id laborum et totam\naut eius sequi dolor maiores amet\nrerum voluptatibus quod ratione quos labore fuga sit'
      },
      {
        'postId': 26,
        'id': 127,
        'name': 'consequatur harum magnam',
        'email': 'Haven_Barrows@brant.org',
        'body': 'omnis consequatur dignissimos iure rerum odio\nculpa laudantium quia voluptas enim est nisi\ndoloremque consequatur autem officiis necessitatibus beatae et\net itaque animi dolor praesentium'
      },
      {
        'postId': 26,
        'id': 128,
        'name': 'labore architecto quaerat tempora voluptas consequuntur animi',
        'email': 'Marianne@maximo.us',
        'body': 'exercitationem eius aut ullam vero\nimpedit similique maiores ea et in culpa possimus omnis\neos labore autem quam repellendus dolores deserunt voluptatem\nnon ullam eos accusamus'
      }
    ]
  }
];

/* Homework 03
  1. Create Posts component and display the data from the given posts array. 
*/

export default App;