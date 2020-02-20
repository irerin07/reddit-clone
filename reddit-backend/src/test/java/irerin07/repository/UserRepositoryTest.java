package irerin07.repository;

import irerin07.domain.User;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest
public class UserRepositoryTest {

    @Autowired
    UserRepository userRepository;

    @Before
    public void cretae() {
        Long id = 0l;
        String nickname = "test";
        String email = "test@test.com";
        String passwd = "test";
        int karma = 2;
        String profilepic = "default";

        userRepository.save(User.builder().id(id).nickname(nickname).email(email).passwd(passwd).karma(karma).profilepic(profilepic).build());
    }

    @After
    public void clean(){
//        userRepository.deleteAll();
    }

    @Test
    public void 유저_저장(){

        List<User> userList = userRepository.findAll();

        User user = userList.get(0);
        assertThat(user.getId()).isEqualTo(1l);

    }

    @Test
    public void 이메일로_유저_찾기(){
        User user = userRepository.findByEmail("test@test.com");
        assertThat(user.getNickname()).isEqualTo("test");
    }

    @Test
    @Transactional
    public void 유저_닉네임_변경(){
        userRepository.updateUserNickName("newTest", 1l);
        Optional<User> user = userRepository.findById(1l);
        assertThat(user.get().getNickname()).isEqualTo("newTest");
    }

}
