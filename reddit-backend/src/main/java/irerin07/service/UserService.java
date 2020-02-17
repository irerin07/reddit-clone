package irerin07.service;

import irerin07.domain.User;
import org.springframework.stereotype.Service;

public interface UserService {
    public User addUser(User user);
    public User findUserByEmail(String email);
}
