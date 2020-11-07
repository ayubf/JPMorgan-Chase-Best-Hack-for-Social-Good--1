import numpy as np
import math

major_dic= {"communication": 45,
            "Business": 50, "STEM": 65,
            "Education ": 45, "MD":250,
            "MBA": 100, "Liberal Arts": 40}


def compute_histogram(self, image):
    """Computes the histogram of the input image
    takes as input:
    image: a grey scale image
    returns a histogram as a list"""
    hist = [0] * 256
    X, Y = image.shape

    for x in range(X):
        for y in range(Y):
            hist[int(image[x, y])] += 1

    return hist
