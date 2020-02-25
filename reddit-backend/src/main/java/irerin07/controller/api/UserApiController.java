package irerin07.controller.api;

import irerin07.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/api/v1/users")
@RestController
@RequiredArgsConstructor
public class UserApiController {

    private final UserService userService;

    //회원가입
    @PostMapping
    public ResponseEntity userJoin() {
        return null;
    }
    //회원탈퇴
    @DeleteMapping
    public ResponseEntity userDelete(){
        return null;
    }

    //회원정보 업데이트
    @PutMapping
    public ResponseEntity userUpdate(){
        return null;
    }
}
