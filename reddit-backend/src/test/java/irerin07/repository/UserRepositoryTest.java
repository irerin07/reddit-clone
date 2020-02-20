package irerin07.repository;

import irerin07.domain.User;
import org.junit.After;
import org.junit.Before;
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

    @Before
    public void cleanAll() {
        Long id = 3l;
        String nickname = "test";
        String email = "test@test.com";
        String passwd = "test";
        int karma = 2;
        String profilepic = "default";

        userRepository.save(User.builder().id(id).nickname(nickname).email(email).passwd(passwd).karma(karma).profilepic(profilepic).build());
    }
    

    @Test
    public void 유저_저장(){

        List<User> userList = userRepository.findAll();

        System.out.println(userList.size());
        for(User u : userList) {
            System.out.println(u.getId());
            System.out.println(u.getEmail());
        }

    }

    @Test
    public void 이메일로_유저_찾기(){
        User user = userRepository.findByEmail("test@test.com");
        assertThat(user.getNickname()).isEqualTo("test");
    }

}
