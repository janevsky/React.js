import Posts from './Posts';
import Student from './Student';

const App = () => {
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

  let age = 23;

  return (
    <div id='app'>
      {/* <Posts posts='posts' /> */}
      {/* <Student age={age}/> */}
      <Student age='age' />
    </div>
  );

  /* Homework 04
    1. Create multiple variables (at least six) that represent some student information. 
    2. Create Student component that will show the student information.
    3. Pass the variables as parameters of the Student component.
    4. Implement typechecking for the parameters in the Student component.  
    5. Missmatch some of the types and see what happens.
    * Practice excercises from previous classes and homeworks.
  */

}

export default App;
