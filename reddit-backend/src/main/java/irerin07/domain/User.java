package irerin07.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "users")
@Getter
@Setter
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

    @Enumerated(EnumType.STRING)
    @Column(nullable = true)
    private Role role;


}
