package irerin07.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
public class User extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(nullable = false)
    private String nickname;
    @Column(nullable = false)
    private String email;
    @Column(nullable = false)
    private String passwd;
    @Column
    private Date regdate;
    @Column
    private int karma;
    @Column
    private String profilepic;
    @Column(nullable = true)
    private Role role;

//    @Enumerated(EnumType.STRING)
//    @Column(nullable = true)
//    private Role role;

    @Builder
    public User(Long id, String nickname, String email, String passwd, int karma, String profilepic){
        this.id = id;
        this.nickname = nickname;
        this.email = email;
        this.passwd = passwd;
        this.karma = karma;
        this.profilepic = profilepic;
    }


}
