package irerin07.service.impl;

import irerin07.domain.User;
import irerin07.repository.UserRepository;
import irerin07.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Transactional
    @Override
    public Long addUser(User user) {
        return userRepository.save(user).getId();
    }

    @Transactional
    @Override
    public User findUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Transactional
    @Override
    public void updateUserNickName(String nickname, long id) {
        userRepository.updateUserNickName(nickname, id);

    }
}
