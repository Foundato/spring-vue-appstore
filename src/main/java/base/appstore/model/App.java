package base.appstore.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.ArrayList;
import java.util.List;

/**
 * App.
 * Model class persisted using JPA
 *
 * @author Gudrun Socher
 * @version 1.0
 */
@Entity
public class App {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String text;
    private String tags;
    private String title;
    private List<Comment> comments;
    private List<Long> ratings;

    public App() {
    }

    /**
     * Constructor used to initialize App object based on HTTP POST.
     *
     * @param text  Text of an App.
     * @param tags  Tags of an App as a list of strings.
     * @param title Title of an App.
     */
    public App(String text, String tags, String title) {
        this.text = text;
        //TODO tags is String, may make it to List
        this.tags = tags;
        this.title = title;
        comments = new ArrayList<>();
        ratings = new ArrayList<>();
    }

    public void addComment(Comment comment) {
        comments.add(comment);
    }

    public void addRating(Long rating){
        ratings.add(rating);
    }

    public Long getAverageRating(){
        Long sum = ratings.stream().reduce(0l,(a,b)->a+b);
        return sum/ratings.size();
    }

    public List<Comment> getComments() {
        return comments;
    }

    public List<Long> getRatings() {
        return ratings;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getTags() {
        return tags;
    }

    public void setTags(String tags) {
        this.tags = tags;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}