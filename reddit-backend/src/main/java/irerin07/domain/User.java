package irerin07.domain;

import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.Collection;
import java.util.Date;

@Builder
@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User extends BaseTimeEntity implements UserDetails {

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

//    @Builder
//    public User(Long id, String nickname, String email, String passwd, int karma, String profilepic){
//        this.id = id;
//        this.nickname = nickname;
//        this.email = email;
//        this.passwd = passwd;
//        this.karma = karma;
//        this.profilepic = profilepic;
//    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getPassword() {
        return null;
    }

    @Override
    public String getUsername() {
        return null;
    }

    @Override
    public boolean isAccountNonExpired() {
        return false;
    }

    @Override
    public boolean isAccountNonLocked() {
        return false;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return false;
    }

    @Override
    public boolean isEnabled() {
        return false;
    }
}
