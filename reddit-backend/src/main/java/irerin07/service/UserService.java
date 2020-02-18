package irerin07.service;

import irerin07.domain.User;

public interface UserService {
    public Long addUser(User user);
    public User findUserByEmail(String email);
}
