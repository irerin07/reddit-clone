package irerin07.repository;

import irerin07.domain.User;
import org.junit.After;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest
public class UserRepositoryTest {

    @Autowired
    UserRepository userRepository;

    @After
    public void clean(){
        userRepository.deleteAll();
    }

    @Test
    public void 유저_저장(){
        Long id = 1l;
        String nickname = "test";
        String email = "test@test.com";
        String passwd = "test";
        int karma = 2;
        String profilepic = "default";

        userRepository.save(User.builder().id(id).nickname(nickname).email(email).passwd(passwd).karma(karma).profilepic(profilepic).build());

        List<User> userList = userRepository.findAll();

        User user = userList.get(0);

        assertThat(user.getId()).isEqualTo(id);
        assertThat(user.getNickname()).isEqualTo(nickname);
        assertThat(user.getEmail()).isEqualTo(email);
        assertThat(user.getPasswd()).isEqualTo(passwd);
        assertThat(user.getKarma()).isEqualTo(karma);
        assertThat(user.getProfilepic()).isEqualTo(profilepic);

    }
}
