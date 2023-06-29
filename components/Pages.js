import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, Title, Paragraph } from 'react-native-paper';

const OvalFacePage = () => {
  return (
    <ScrollView style={styles.container}>
      <Title style={styles.title}>Fashion Styles for Oval Face Shape</Title>
      <Paragraph style={styles.paragraph}>
        An oval face shape is considered to be the most versatile and balanced face shape.
        Here are some fashion tips and styles that suit someone with an oval face shape:
      </Paragraph>
      <Paragraph style={styles.paragraph}>
        1. Hairstyles: Almost any hairstyle suits oval faces. You can try different lengths,
        from short pixie cuts to long flowing locks. Experiment with different haircuts and
        styles based on your personal preference.
      </Paragraph>
      <Paragraph style={styles.paragraph}>
        2. Eyewear: Oval faces are well-suited for various eyewear styles. Consider trying
        different frame shapes, such as rectangular, square, or cat-eye frames, to add
        definition to your face.
      </Paragraph>
      <Paragraph style={styles.paragraph}>
        3. Clothing: With an oval face shape, you have the freedom to experiment with various
        clothing styles. From tailored blazers to flowy dresses, most styles will complement
        your facial features. Play with different necklines and silhouettes to find what
        suits you best.
      </Paragraph>
      {/* Add more content as needed */}
    </ScrollView>
  );
};

const SquareFacePage = () => {
  return (
    <ScrollView style={styles.container}>
      <Title style={styles.title}>Fashion Styles for Square Face Shape</Title>
      <Paragraph style={styles.paragraph}>
        A square face shape typically features a strong jawline and a broad forehead. Here
        are some fashion tips and styles that suit someone with a square face shape:
      </Paragraph>
      <Paragraph style={styles.paragraph}>
        1. Hairstyles: Soften the angular features of a square face shape with hairstyles that
        add volume and create movement. Consider layered cuts, wavy styles, or side-swept bangs
        to balance out the strong jawline.
      </Paragraph>
      <Paragraph style={styles.paragraph}>
        2. Eyewear: Choose eyewear styles that contrast with the squareness of your face.
        Round or oval frames can help soften the angles. Avoid square or geometric frames,
        as they may accentuate the squareness.
      </Paragraph>
      <Paragraph style={styles.paragraph}>
        3. Clothing: Opt for clothing styles that create visual interest and soften the
        jawline. V-neck or scoop neck tops can help elongate the face. A-line dresses and
        skirts can add curves and balance out the angular features.
      </Paragraph>
      {/* Add more content as needed */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  paragraph: {
    marginBottom: 8,
  },
});

export { OvalFacePage, SquareFacePage };
